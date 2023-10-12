<script setup>
const props = defineProps({
    stats: {
        type: Object,
        default: {}
    },
    smsBalance: {
        type: String,
        default: "--"
    },
    loading: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: ""
    },
})

</script>
<template>
   <div>
    <p class="text-h2 font-weight-bold text-uppercase text-center pt-0 pb-0">{{ props.type == "today" ? "Today" : props.type == "week" ? "This Week" : props.type }}</p>
      <VRow class="mx-0 my-0" justify="space-around">
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Users</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.users || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Deliveries</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.deliveries || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Orders</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.orders || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Branches</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.branches || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Sms</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.smsBalance || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Total Products</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.products || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Total Sales</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.sales || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3 d-flex align-center justify-center" style="width: 330px; height: 200px;">
            <VCardText class="pt-0 mt-0 h-100 d-flex align-center justify-center flex-column pb-0">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">Total Invoices</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ props.stats.invoices || "--" }}</p>
            </VCardText>
        </VCard>
    </VRow>
   </div>
</template>