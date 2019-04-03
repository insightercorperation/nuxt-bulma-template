<template>
  <section class="section">
    <div class="columns">
      <div class="column is-3">
        <header class="ins-section-header has-text-left">
          <h3 class="title">{{ title }}</h3>
          <h5 class="desc">
            {{ subtitle }}
          </h5>
        </header>
      </div>
      <div class="column is-9">
        <div>
          <div v-if="hasYearItems">
            <div
              v-for="(itemContent, itemIndex) in yearItemData"
              :key="itemIndex"
            >
              <history-section-timeline-item :item="itemContent" />
            </div>
          </div>
          <p v-else>{{ messageWhenNoItems }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HistorySectionTimelineItem from './HistorySectionTimelineItem.vue'

export default {
  name: 'HistorySection',
  components: {
    HistorySectionTimelineItem
  },
  props: {
    title: {
      type: String,
      default: 'History'
    },
    subtitle: {
      type: String,
      default: ''
    },
    timelineItems: {
      type: Array,
      default: () => []
    },
    messageWhenNoItems: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasYearItems() {
      return !!this.yearItemData.length
    },
    yearItemData() {
      const yearItems = this.timelineItems.map(item => {
        const year = item.from.getFullYear()
        const month = item.from.getMonth() + 1
        const date = `${year}.${month}`
        const title = item.title
        return {
          year,
          date,
          title
        }
      })
      const yearsSet = new Set(yearItems.map(item => item.year))
      const rv = []
      for (const year of yearsSet) {
        const result = {}
        result.year = year
        result.events = []

        for (const yearItem of yearItems) {
          if (yearItem.year === year) {
            const tmp = {}
            tmp.strDate = yearItem.date
            tmp.title = yearItem.title
            result.events.push(tmp)
          }
        }
        rv.push(result)
      }
      return rv
    }
  },
  methods: {
    sample() {
      return 'sample'
    }
  }
}
</script>
<style lang="scss" scoped>
.timeline {
  text-align: left;
  width: 100%;
  max-width: 500px;
  .wrapper-timeline {
    position: relative;
  }
  .wrapper-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    .section-year {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      padding: 15px;
      font-weight: bold;
      font-size: 18px;
      .year {
        margin: 0;
      }
    }
    &.unique-timeline {
      margin-bottom: 0;
    }
  }
}
</style>
