import React from 'react'
import Pagination from '../Pagination'

const defaultClassNames = {
  container: "pagination",
  page: "page",
  activePage: "page active",
  previousPage: "page previous",
  nextPage: "page next",
}

const defaultLabels = {
  previous: "prev",
  next: "next"
}

export default ({maxPageCount, current, last, onClick, classNames, labels}) => {

  classNames = classNames ? classNames : defaultClassNames
  labels = labels ? labels : defaultLabels

  const pagination = new Pagination({maxPageCount})
  const { previous, pages, next } = pagination.paginate({current, last})

  if (pages.length === 0) {
    return (null)
  }

  const elements = []

  if (previous) {
    elements.push((
      <li key="prev" className={classNames.previousPage} onClick={() => onClick(previous)}>{labels.previous}</li>
    ))
  } else {
    elements.push((
      <li key="prev" className={classNames.disabledPreviousPage}>{labels.previous}</li>
    ))
  }

  pages.forEach((page) => {
    if (page === current) {
      elements.push((
        <li key={page} className={classNames.activePage}>{page}</li>
      ))
    } else {
      elements.push((
        <li key={page} className={classNames.page} onClick={() => onClick(page)}>{page}</li>
      ))
    }
  })

  if (next) {
    elements.push((
      <li key="next" className={classNames.nextPage} onClick={() => onClick(next)}>{labels.next}</li>
    ))
  } else {
    elements.push((
      <li key="next" className={classNames.disabledNextPage}>{labels.next}</li>
    ))
  }

  return (
    <ul className={classNames.container}>
      {elements}
    </ul>
  )
}
