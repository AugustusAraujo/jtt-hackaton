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
        <Header />

        <div class="wrapper block">
            <h2 class="text-3xl font-medium pt-4">Captação de Investimentos</h2>
            <div class="recent-project w-full h-28 block bg-[#e3e3e3] p-4 my-4 rounded-md">
                <div class="title">
                    <h3 class="name">Novo google</h3>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_19_56)">
                            <path d="M5.625 3.5L9.375 7L5.625 10.5" stroke="black" stroke-opacity="0.77"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_19_56">
                                <rect width="15" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div class="progress block mt-5">
                    <h3 class="progress">20.000 / 50.000</h3>
                    <Progress max="100" value="20" />
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.feed-content>.content {
    width: 100%;
    max-height: 300px;
    background-color: #e3e3e3
}
</style>