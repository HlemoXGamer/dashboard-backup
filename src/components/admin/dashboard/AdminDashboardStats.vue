<script setup>
import products from "@/assets/images/box.png";
import branches from "@/assets/images/branches.png";
import delivery from "@/assets/images/delivery.png";
import invoices from "@/assets/images/invoice.png";
import orders from "@/assets/images/orders.png";
import sales from "@/assets/images/sales.png";
import sms from "@/assets/images/sms.png";
import users from "@/assets/images/users.png";

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
    }
})

</script>
<template>
  <VRow class="mx-0 my-0" justify="space-around">
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="users" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Users") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ stats.users || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="delivery" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Deliveries") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ stats.deliveries || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="orders" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Orders") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ stats.orders || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="branches" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Branches") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ stats.branches || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="sms" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Sms") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ smsBalance || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="products" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Total Products") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ stats.products || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="sales" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Total Sales") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ stats.sales || "--" }}</p>
            </VCardText>
        </VCard>
        <VCard :loading="loading" class="py-7 my-3" style="width: 330px; height: 270px;">
            <VImg :src="invoices" style="height: 90px;" contain class="my-2 rounded mx-auto"/>
            <VCardText class="pt-0 mt-4">
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0">{{ $t("Total Invoices") }}</p>
                <p class="text-center text-h3 font-weight-bold text-uppercase pb-0 mb-0 mt-2">{{ stats.invoices || "--" }}</p>
            </VCardText>
        </VCard>
    </VRow>
</template>