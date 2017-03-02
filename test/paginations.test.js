import assert from 'assert'
import Pagination from '../src/Pagination'

describe('Pagination', function() {

  it('not found page links', () => {

    const pagination = new Pagination({maxPageCount: 5})

    assert.deepEqual(
      [],
      pagination.paginate({current: 1, last: 1}).pages
    )
  })


  it('provide all pages if maxPageCount bigger than last.', () => {

    const pagination = new Pagination({maxPageCount: 5})

    assert.deepEqual(
      [1, 2, 3, 4],
      pagination.paginate({current: 3, last: 4}).pages
    )
  })

  it('provide 10 pages from first page if current is near by first.', () => {

    const pagination = new Pagination()

    assert.deepEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pagination.paginate({current: 1, last: 20}).pages
    )

    assert.deepEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pagination.paginate({current: 4, last: 20}).pages
    )

    assert.deepEqual(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pagination.paginate({current: 6, last: 20}).pages
    )

    assert.deepEqual(
      [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      pagination.paginate({current: 7, last: 20}).pages,
      "current is too far from fisrt"
    )
  })

  it('provide 10 pages from last page if current is near by last.', () => {

    const pagination = new Pagination()

    assert.deepEqual(
      [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      pagination.paginate({current: 20, last: 20}).pages
    )

    assert.deepEqual(
      [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      pagination.paginate({current: 19, last: 20}).pages
    )

    assert.deepEqual(
      [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      pagination.paginate({current: 16, last: 20}).pages
    )

    assert.deepEqual(
      [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      pagination.paginate({current: 15, last: 20}).pages,
      "current is too far from last"
    )
  })
})

