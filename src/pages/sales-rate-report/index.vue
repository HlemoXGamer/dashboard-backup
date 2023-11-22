<script setup>
import LineChart from '@core/libs/chartjs/components/LineChart'
import { mostSoldProduct } from '@/apis/admin/stats';
import { mostSoldProduct as mostSoldRestaurantProduct } from '@/apis/restuarant/stats';
import { mostSoldProduct as mostSoldOperationProduct } from '@/apis/operation/stats';
import { mostSoldProduct as mostSoldLogisticProduct } from '@/apis/logistics/stats';
import { mostSoldProduct as mostSoldFinanceProduct } from '@/apis/finances/stats';
import { mostSoldProduct as mostSoldAgentProduct } from '@/apis/agent/stats';
import axiosIns from "@/plugins/axios";
import { useI18n } from "vue-i18n"
const $useI18n = useI18n()
const t = $useI18n.t;
const dateDialog = ref(false);
const pickedFromDate = ref(null);
const pickedToDate = ref(null);
const userRole = JSON.parse(localStorage.getItem("userData"))?.type;
const branchData = JSON.parse(localStorage.getItem("userData"));
const currentStatus = ref("today");
const actualStatus = ref("today");
const loading = ref(false);
const loadings = ref({
    export: false
});
const statuses = computed(() => [
    {
        title: t("Custom"),
        value: "custom",
    },
    {
        title: t("This Month"),
        value: "month",
    },
    {
        title: t("This Week"),
        value: "week",
    },
    {
        title: t("Today"),
        value: "today",
    }])

const stats = ref({
    orders: "",
    product: "",
    sales: ""
});

const setChartData = (data) => {
    sales_chart.value.labels = data.plot.map(plot => plot.date);
    sales_chart.value.datasets[0].data = data.plot.map(plot => plot.sales);
    sales_chart.value.datasets[1].data = data.plot.map(plot => plot.orders);
    sales_chart_key.value += 1;
}

const _getMostSold = async (custom) => {
    loading.value = true;
    if (custom === true) {
        dateDialog.value = false;
        let from = pickedFromDate.value;
        let to = pickedToDate.value;
        if (userRole == "admin") {
            await mostSoldProduct(`${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "restaurant") {
            await mostSoldRestaurantProduct(`branch=${branchData.branch_id}${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "operation") {
            await mostSoldOperationProduct(`${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "logistic") {
            await mostSoldLogisticProduct(`${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "finance") {
            await mostSoldFinanceProduct(`${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "agent") {
            await mostSoldAgentProduct(`${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        }
    } else {
        if (userRole == "admin") {
            await mostSoldProduct(currentStatus.value).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "restaurant") {
            await mostSoldRestaurantProduct(`${currentStatus.value}&branch=${branchData.branch_id}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "operation") {
            await mostSoldOperationProduct(`${currentStatus.value}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "logistic") {
            await mostSoldLogisticProduct(`${currentStatus.value}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "finance") {
            await mostSoldFinanceProduct(`${currentStatus.value}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        } else if (userRole == "agent") {
            await mostSoldAgentProduct(`${currentStatus.value}`).then(({ data }) => {
                stats.value = data;
                setChartData(data);
            }).finally(() => {
                loading.value = false;
            })
        }
    }
    actualStatus.value = currentStatus.value;
}
const sales_chart_key = ref(0);
const sales_chart = ref({
    labels: [],
    datasets: [
        {
            fill: true,
            tension: 0.5,
            pointRadius: 4,
            label: 'Sales',
            pointHoverRadius: 5,
            pointStyle: 'circle',
            borderColor: '#ffcf5c',
            backgroundColor: '#ffcf5c',
            pointHoverBorderWidth: 5,
            pointHoverBorderColor: 'white',
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: '#ffcf5c',
            data: [],
        },
        {
            fill: true,
            tension: 0.5,
            label: 'Orders',
            pointRadius: 4,
            pointHoverRadius: 5,
            pointStyle: 'circle',
            borderColor: '#4169e1',
            backgroundColor: '#4169e1',
            pointHoverBorderWidth: 15,
            pointHoverBorderColor: 'white',
            pointBorderColor: 'transparent',
            pointHoverBackgroundColor: '#4169e1',
            data: [],
        }]
})

const closeDateDialog = () => {
    dateDialog.value = false;
    currentStatus.value = "today";
    pickedFromDate.value = ref(null);
    pickedToDate.value = ref(null);
    _getMostSold(false);
}

const isCustom = () => {
    setTimeout(() => {
        if (currentStatus.value == "custom") {
            dateDialog.value = true;
        } else {
            _getMostSold(false);
        }
    }, 100)
}

const _exportExcel = async () => {
    let from = pickedFromDate.value;
    let to = pickedToDate.value;
    let query = {};
    if (from !== null && from !== undefined) {
        query.from = from;
    }
    if (to !== null && to !== undefined) {
        query.to = to;
    }

    loadings.value.export = true;
    try {
        await axiosIns.get(`${userRole !== 'admin' ? userRole : ''}/stats/product?${currentStatus.value}${from !== null ? '&from=' + from : ''}${to !== null ? '&to=' + to : ''}&export${userRole == 'restaurant' ? '&branch=' + branchData.branch_id : ''}`, { responseType: "arraybuffer" })
            .then((res) => {
                const blob = new Blob([res.data], { type: "application/vnd.ms-excel" });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `sales-report-${currentStatus.value}${userRole == 'restaurant' ? ' - ' + branchData.name : ''}.xlsx`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    } catch (err) {
        console.log(err);
    } finally {
        loadings.value.export = false;
    }
}

onMounted(() => {
    _getMostSold();
})


</script>
<template>
    <div>
        <VDialog v-model="dateDialog" persistent class="v-dialog-sm">
            <DialogCloseBtn @click="closeDateDialog()" />
            <VCard :title="$t('Pick a custom Date')">
                <VCardText class="d-flex ">
                    <AppDateTimePicker class="me-1" :placeholder="$t('From')" prepend-inner-icon="tabler-calendar"
                        v-model="pickedFromDate" />
                    <AppDateTimePicker class="ms-1" :placeholder="$t('To')" prepend-inner-icon="tabler-calendar"
                        v-model="pickedToDate" />
                </VCardText>
                <VCardText class="d-flex justify-end gap-3 flex-wrap">
                    <VBtn @click="_getMostSold(true)" :loading="loading" :disabled="!pickedFromDate && !pickedToDate">
                        {{ $t('Pick') }}
                    </VBtn>
                </VCardText>
            </VCard>
        </VDialog>
        <VCol style="background-color: rgb(var(--v-theme-surface));" class="rounded pb-10">
            <VRow class="mx-0 my-0 pb-0 px-0 pt-3">
                <p class="text-h4 ps-3">{{ $t('Sales Rate') }}</p>
                <VSpacer />
                <VBtn prepend-icon="tabler-upload" color="success" class="mr-3" @click="_exportExcel"
                    :loading="loadings.export">{{ $t('Export Excel') }}</VBtn>
            </VRow>
            <VRow class="mx-0 py-0 px-4 py-5 mt-1">
                <VSelect :items="statuses" item-value="value" item-title="title" v-model="currentStatus"
                    :label="$t('Select a period of time')" prepend-inner-icon="tabler-clock" />
                <VBtn class="ms-2" @click="isCustom()" :loading="loading">{{ $t('Search') }}</VBtn>
                <VSpacer />
            </VRow>
            <VRow class="mx-0 my-0 px-4 mt-5" :class="{ 'flex-nowrap': !$vuetify.display.sm }" align="center"
                :justify="$vuetify.display.sm ? 'center' : 'space-between'">
                <VCard width="300" min-width="210" height="260" class="mx-0 mb-0 mt-2 px-0 py-5" color="primary"
                    variant="tonal">
                    <VCardText class="text-center">
                        <VIcon icon="tabler-shopping-cart" :size="100" />
                        <p class="text-h4 mt-5 font-weight-bold text-uppsercase">{{ stats.orders || "--" }}</p>
                    </VCardText>
                </VCard>
                <VCard width="300" min-width="210" height="260" class="mb-0 px-0 mt-2 py-5 mx-2" color="primary"
                    variant="tonal">
                    <VCardText class="text-center">
                        <VIcon icon="tabler-currency-dollar" :size="100" />
                        <p class="text-h4 mt-5 font-weight-bold text-uppsercase">{{ stats.sales || 0 }}</p>
                    </VCardText>
                </VCard>
                <VCard width="300" min-width="210" height="260" class="mx-0 mb-0 px-0 py-5 mt-2" color="primary"
                    variant="tonal">
                    <VCardText class="text-center">
                        <VIcon icon="tabler-medal" :size="100" />
                        <p class="text-h4 mt-5 font-weight-bold text-uppsercase">{{ stats.product || "--" }}</p>
                    </VCardText>
                </VCard>
            </VRow>
            <VRow class="mx-0 my-0 px-4 mt-5 position-relative rounded-lg">
                <!-- <div v-if="actualStatus == 'today'" class="rounded-lg closed-line position-absolute h-100 d-flex align-center justify-center"
                    style="width: 97%; background-color: rgba(0, 0, 0, 0.204);">
                    <p class="text-h2 text-center text-uppercase">{{ $t("Untrackable Data") }}</p>
                </div> -->
                <LineChart :height="200" :chart-data="sales_chart" :key="sales_chart_key" />
            </VRow>
        </VCol>
    </div>
</template>

<route lang="yaml">
    meta:
      requiresAuth: true
      roles: ["admin", "restaurant", "agent"]
  </route>
    