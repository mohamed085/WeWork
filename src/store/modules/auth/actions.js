import router from "@/router";

export default {
    async login(context, payload) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let data = JSON.stringify({
            "email": payload.email,
            "password": payload.password
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        let url = "https://backend-elbanna.we-work.pro/api/admin/login"

        const response = await fetch(url, requestOptions);
        const responseData = await response.json();

        if (!responseData.status) {
            console.log(responseData.status);
            throw new Error('Error');
        }

        localStorage.setItem('token', responseData.data.token);
        localStorage.setItem('userId', responseData.data.admin.id);
        localStorage.setItem('name', responseData.data.admin.name);
        localStorage.setItem('email', responseData.data.admin.id);

        context.commit('setUser', {
            token: responseData.data.token,
            userId: responseData.data.admin.id,
            name: responseData.data.admin.name,
            email: responseData.data.admin.email,
        })

    },

    tryLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const name = localStorage.getItem('name')
        const email = localStorage.getItem('email')

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
                name: name,
                email: email,
            })
        }
    },

    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            name: null,
            email: null,
        })

        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('name')
        localStorage.removeItem('email')

        router.push("/");

    }
}
