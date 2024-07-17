<script setup lang=ts>

import type { Author } from "~/types/author";

let author: Author = {
    bio: "iergijetbrgehbnj",
    img: "ybhvbrhvbe",
    investments: [],
    name: "Homem",
    posts: [],
}
</script>

<template>
    <div style="width: 600px; display: block; margin: auto;">
        <div class="flex flex-wrap">
            <div class="w-[100%] h-[150px] bg-orange-400"></div>
            <div class="w-[120px] h-[120px] rounded-lg bg-gray-400 translate-y-[-60px] ml-5"></div>
        </div>
        <div class="plist block p-5 box-border translate-y-[-60px]">
            <h1 class="text-3xl w-[100%] font-medium">Rodrigo Souza Medeiros</h1>
            <p class="text-justify">Podemos já vislumbrar o modo pelo qual a mobilidade dos capitais internacionais
                ainda não demonstrou
                convincentemente que vai participar na mudança das diretrizes de desenvolvimento para o futuro.</p>
            <h2 class="text-2xl pt-4 font-medium">Contato</h2>
            <span class="flex pt-2 gap-4 items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                </span>
                <p class="text-lg">jovemempreendedor@mail.com</p>
            </span>
            <!-- <h2 class="text-2xl pt-4 font-medium">Empresas</h2>
            <div>
                <div class="pt-2 gap-3">
                    <div class="w-[40px] h-[40px] rounded-md bg-gray-400"></div>
                    <div class="text-lg">Empresa bacana</div>
                </div>
            </div> -->
            <h2 class="text-2xl font-medium pt-4">Publicações e Investimentos</h2>
            <div class="feed-content block">
                <Card desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?" :author="author" likes="100"/>
                <InvestFeedCard desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?" :author="author" likes="72" :value="20" required="500"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.plist {
    width: 100%;
}
</style>