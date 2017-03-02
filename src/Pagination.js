import { Range } from 'immutable'

export default class Pagination {

  constructor(args) {
    this.maxPageCount = args && args.maxPageCount || 10

    if (this.maxPageCount % 2 === 0) {
      this.prevRange = this.maxPageCount / 2
      this.nextRange = this.maxPageCount / 2 - 1
    } else {
      this.prevRange = (this.maxPageCount - 1) / 2
      this.nextRange = (this.maxPageCount - 1) / 2
    }
  }

  paginate({current, last}) {

    if (current === 1 && last === 1) {
      return { pages : [], }
    }

    const previous = current > 1 ? current - 1 : null
    const next = current < last ? current + 1 : null

    // provide all pages if maxPageCount bigger than last.
    if (last <= this.maxPageCount) {
      return { pages: Range(1, last + 1).toArray(), previous, next }
    }

    // provide max pages from first page when current is near by first.
    if (current <= this.prevRange + 1) {
      return { pages: Range(1, this.maxPageCount + 1).toArray(), previous, next }
    }

    // provide max pages from last page when current is near by last.
    if (last - current < this.nextRange + 1) {
      return { pages: Range(last - this.maxPageCount + 1, last + 1).toArray(), previous, next }
    }

    const startPage = current - this.prevRange

    return { pages: Range(startPage, startPage + this.maxPageCount).toArray(), previous, next }
  }
}
