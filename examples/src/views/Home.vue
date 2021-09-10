<template>
    <div class="home">
        <div @click="handleClick" >test1111</div>
        <!-- <img alt="Vue logo" src="../assets/logo.png"/> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>

<script>
import useCurrentInstance from '@/hooks/use-current-instance'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    setup() {
        const {
            globalProperties: { $axios }
        } = useCurrentInstance()

        const request = n => {
            $axios({
                url: '/api/caseType/list',
                data: {
                    aa: n
                },
                unic: true
            })
                .then(({ data }) => {
                    console.log(910, data)
                })
                .catch(err => {
                    console.log(911, err)
                })
        }

        const handleClick = () => {
            request(1)
            request(2)
            request(3)
            // request(4)
            // request(5)
            // request(6)
        }

        return {
            handleClick
        }
    }
}
</script>
