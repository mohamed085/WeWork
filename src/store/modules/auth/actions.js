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

        let url = "https://yaformelbanna.we-work.pro/api/unauth/login"
        const response = await fetch(url, requestOptions);
        const responseData = await response.json();

        console.log(responseData.msg);

        if (!responseData.status) {
            console.log(responseData.status);
            throw new Error('Error');
        }

        localStorage.setItem('token', responseData.msg.token);
        localStorage.setItem('userId', responseData.msg.id);
        localStorage.setItem('name', responseData.msg.name);
        localStorage.setItem('email', responseData.msg.id);

        context.commit('setUser', {
            token: responseData.msg.token,
            userId: responseData.msg.id,
            name: responseData.msg.name,
            email: responseData.msg.email,
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
