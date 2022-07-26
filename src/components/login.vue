<template>
    <div class="absolute top-0 z-30 w-full h-full">
        <div class="flex w-full justify-center items-center h-full">
            <div class=" bg-gray-1 w-10/12 sm:w-2/5 rounded-2xl">
                <section class=" text-right mr-3 mt-1 ">
                    <button @click="$emit('close-login')" class=" font-semibold text-xl">x</button>
                </section>
                <section class="w-full text-center pt-7 text-2xl font-bold pb-8">
                    <p>MASUK</p>
                </section>
                <form action="">
                    <section class="flex flex-col pb-7 items-center justify-center w-full">
                        <label class="w-3/4 pb-1">E-mail</label>
                        <input type="email" placeholder="masukkan email..." class="w-3/4 px-2 py-1 bg-white rounded-xl border h-9">
                    </section>
                    <section class="flex flex-col items-center justify-center w-full"> 
                        <label class="w-3/4 pb-1">Password</label>
                        <input type="password" placeholder="masukkan password..." class="w-3/4 bg-white px-2 py-1 rounded-xl border h-9">
                    </section>
                    <section class="w-full flex justify-center">
                        <section class="pb-10 w-3/4 text-right ">
                            <button class="hover:text-blue-1 transition-colors duration-200 text-sm">lupa password?</button>
                        </section>
                    </section>
                    <section class="flex w-full justify-center pb-8">
                        <section class="flex flex-row justify-between w-3/4">
                            <div @click="$emit('open-register')" class="cursor-pointer text-blue-purple hover:text-black transition-colors duration-200">Daftar</div>
                            <button type="submit" class=" bg-blue-purple hover:bg-opacity-80 transition-colors duration-200 py-2 px-7 rounded-lg">Masuk</button>
                        </section>
                    </section> 
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>