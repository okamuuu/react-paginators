import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left'
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right'
import Paginator from './Paginator'

const x = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "no-wrap",
    borderRadius: "2px"
  },
  page: {
    listStyle: "none",
    border: "1px solid #ccc",
    borderRight: "none",
    textAlign:"center",
    fontSize: "11px",
    width: "35px",
    height: "35px",
    lineHeight: "35px",
    color: "#337ab7",
    cursor: "pointer",
    ":first-child": {
      borderRadius: "2px 0 0 2px"
    },
    ":last-child": {
      borderRight: "1px solid #ccc",
      borderRadius: "0 2px 2px 0"
    },
    ":hover": {
      textDecoration: "none"
    },
    ":disabled": {
      cursor: "default",
    }
  },
  previous: {
    lineHeight: "32px"
  },
  next: {
    lineHeight: "32px"
  },
  active: {
    cursor: "default",
    background: "#337ab7",
    borderColor: "#337ab7",
    marginRight: "-1px",
    zIndex: "100",
    color: "#fff"
  },
  disabled: {
    cursor: "default",
    color: "#d3d3d3",
    background: "#fafafa"
  }
})

export default ({maxPageCount, current, last, onClick}) => {

  const labels = {
    previous: <FaAngleDoubleLeft />,
    next: <FaAngleDoubleRight />
  }

  const classNames = {
    container: css([x.container]),
    page: css([x.page]),
    activePage: css([x.page, x.active]),
    previousPage: css([x.page, x.previous]),
    disabledPreviousPage: css([x.page, x.previous, x.disabled]),
    nextPage: css([x.page, x.next]),
    disabledNextPage: css([x.page, x.next, x.disabled])
  }

  return (
    <Paginator maxPageCount={maxPageCount} classNames={classNames} labels={labels} current={current} last={last} onClick={onClick} />
  )
}
