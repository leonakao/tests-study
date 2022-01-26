<template>
    <div>
        {{ name }}
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Form extends Vue {
    public name = "Naka"
}
</script>