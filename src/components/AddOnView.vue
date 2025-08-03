<template>
  <div class="add-on-view">
    <div class="add-on-view-container container">
      <div class="add-on-view-title">{{ $t('addOn.title') }}</div>
      <table class="add-on-table" v-if="!isMobile">
        <thead>
          <tr>
            <th>{{ $t('addOn.tableHeaders.condition') }}</th>
            <th>{{ $t('addOn.tableHeaders.price') }}</th>
            <th>{{ $t('addOn.tableHeaders.discount') }}</th>
            <th>{{ $t('addOn.tableHeaders.note') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in addOnData" :key="item.key">
            <td>{{ $t(`addOn.conditions.${item.key}`) }}</td>
            <td>{{ item.price }}</td>
            <td v-html="$t(`addOn.discounts.${item.discountKey}`)" ></td>
            <td>{{ $t(`addOn.notes.${item.noteKey}`) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="add-on-table-mobile" v-else>
        <div class="add-on-table-mobile-group">
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.condition') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(0, 2)" :key="item.key">
              <div class="add-on-table-mobile-item-title">{{ $t(`addOn.conditions.${item.key}`) }}</div>
            </div>
          </div>
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.price') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(0, 2)" :key="item.key">
              <div class="add-on-table-mobile-item-title">{{ item.price }}</div>
            </div>
          </div>
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.discount') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(0, 2)" :key="item.key">
              <div class="add-on-table-mobile-item-title" v-html="$t(`addOn.discounts.${item.discountKey}`)" ></div>
            </div>
          </div>
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.note') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(0, 2)" :key="item.key">
              <div class="add-on-table-mobile-item-title">{{ $t(`addOn.notes.${item.noteKey}`) }}</div>
            </div>
          </div>

        </div>

        <div class="add-on-table-mobile-group">
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.condition') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(2, 4)" :key="item.key">
              <div class="add-on-table-mobile-item-title">{{ $t(`addOn.conditions.${item.key}`) }}</div>
            </div>
          </div>
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.price') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(2, 4)" :key="item.key">
              <div class="add-on-table-mobile-item-title">{{ item.price }}</div>
            </div>
          </div>
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.discount') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(2, 4)" :key="item.key">
              <div class="add-on-table-mobile-item-title" v-html="$t(`addOn.discounts.${item.discountKey}`)" ></div>
            </div>
          </div>
          <div class="add-on-table-mobile-item">
            <div class="add-on-table-mobile-item-th">
              <div class="add-on-table-mobile-item-title">{{ $t('addOn.tableHeaders.note') }}</div>
            </div>
            <div class="add-on-table-mobile-item-td" v-for="item in addOnData.slice(2, 4)" :key="item.key">
              <div class="add-on-table-mobile-item-title">{{ $t(`addOn.notes.${item.noteKey}`) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

const addOnData = [
  {
    key: 'under1000',
    price: '1,000 NTD',
    discountKey: 'none',
    noteKey: 'small',
  },
  {
    key: 'over2000',
    price: '1,800 NTD',
    discountKey: 'percent10',
    noteKey: 'medium',
  },
  {
    key: 'over4000',
    price: '3,200 NTD',
    discountKey: 'percent20',
    noteKey: 'large',
  },
  {
    key: 'over8000',
    price: '5,600 NTD',
    discountKey: 'percent30',
    noteKey: 'best',
  },

]

</script>
<style lang="scss" scoped>
$primary-color: #353535;
.add-on-view {
  background-color: #F6F6F6;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  .add-on-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;
    overflow: auto;
    .add-on-view-title {
      font-size: 20px;
      font-weight: 700;
      color: $primary-color;
      line-height: 1.5;
    }
  }
  .add-on-table {
    border-collapse: collapse;
    border-spacing: 0;
    overflow: hidden;
    color: $primary-color;
    line-height: 1.5;
    font-size: 16px;
    thead {
      background-color: #FAFAFA;
      border-bottom: 1px solid #f6f6f6;
      th {
        font-weight: 600;
      }
    }
    tr{
      height: 40px;
      td {
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #EAEAEA;
        border-right: 1px solid #EAEAEA;
        &:nth-child(1), &:nth-child(2) {
          width: 120px;
          text-align: center;
        }
        &:nth-child(3) {
          width: 280px;
          text-align: center;
        }
        &:nth-child(4) {
          padding: 0 12px;
          width: 280px;
          text-align: left;
        }
        &:last-child {
          border-right: none;
        }

      }
    }

  }
  .add-on-table-mobile {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 12px;
    .add-on-table-mobile-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      .add-on-table-mobile-item {
        display: grid;
        grid-template-columns: 80px 1fr 1fr;
        grid-template-rows: repeat(1, 1fr);
        width: 100%;
        &:nth-child(3), &:nth-child(4) {
          .add-on-table-mobile-item-td div{
            text-align: left;
          }
        }
        .add-on-table-mobile-item-th {
          width: 80px;
          background-color: #FAFAFA;
          height: 100%;
          div{
            text-align: center;
            font-size: 14px;
            color: $primary-color;
            line-height: 1.5;
            min-height: 37px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px 12px;
            box-sizing: border-box;
            border-bottom: 1px solid #FAFAFA;

            height: 100%;
          }
        }
        .add-on-table-mobile-item-td {
          height: 100%;
          flex: 1;
          border-right: 1px solid #EAEAEA;
          border-left: none;
          div{
            text-align: center;
            font-size: 14px;
            color: $primary-color;
            line-height: 1.5;
            min-height: 37px;
            font-weight: 400;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 140px;
            padding: 8px 12px;
            box-sizing: border-box;
            border-bottom: 1px solid #EAEAEA;
            height: 100%;
            &:nth-child(1), &:nth-child(2) {

            }
            &:nth-child(3), &:nth-child(4) {
              text-align: left;
            }


          }
          &:last-child {
            border-right: none;
          }
          &:first-child {
            border-left: 1px solid #EAEAEA;
          }


        }
        &:last-child {
          .add-on-table-mobile-item-td {
            div{
              border-bottom: none;
            }
          }
        }
      }


    }
  }
}

</style>
