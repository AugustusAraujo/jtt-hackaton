<script setup lang="ts">
const route = useRoute();

const isActive= (path:string) => {
    return route.path === path;
}
</script>

<template>
    <div
        class="w-2/3 h-20 rounded-full bg-[#E3E3E3] flex justify-around z-50 bottom-5 fixed m-auto left-0 right-0 items-center">
        <NuxtLink to="/" class="h-[39px]" :class="{ active: isActive('/')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-home">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
        </NuxtLink>
        <NuxtLink to="/feed" class="h-[39px]" :class="{ active: isActive('/feed')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-template">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
                <path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M14 12l6 0" />
                <path d="M14 16l6 0" />
                <path d="M14 20l6 0" />
            </svg>
        </NuxtLink>
        <NuxtLink to="/feed_invest" class="h-[39px]" :class="{ active: isActive('/feed_invest')}">
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-chart-line">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 19l16 0" />
                <path d="M4 15l4 -6l4 2l4 -5l4 4" />
            </svg>
        </NuxtLink>
        <NuxtLink to="/profile" class="h-[39px]" :class="{ active: isActive('/profile')}">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="39"  height="39"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-square-rounded"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /><path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" /></svg>
        </NuxtLink>
    </div>
</template>

<style>
a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    min-height: 50px;
    border-radius: 10px 50%;
}

a::hover {

}

.active{
    background-color: #FFF;
}

</style>