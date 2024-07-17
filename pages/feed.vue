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
        <h2 class="text-3xl font-medium pt-4 pb-2">Explorar</h2>

        <div class="block">
            <InvestFeedCard
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="72" :value="20" required="500" name="Black Rock" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <InvestFeedCard
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="72" :value="20" required="500" name="Black Rock" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <InvestFeedCard
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="72" :value="20" required="500" name="Black Rock" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
            <Card
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nam eligendi ex nulla facilis quo saepe sint ratione consectetur, illo, animi rerum minima repudiandae quia mollitia numquam doloremque dolorem. Nobis?"
                :author="author" likes="100" />
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