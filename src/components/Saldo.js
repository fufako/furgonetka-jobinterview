import { useState, useEffect, useCallback } from "react"
const Saldo = (props) => {
  const { items, removeFromCart } = props
  const [total, setTotal] = useState()

  const handleRemove = (item) => {
    console.log("Before removeFormCart: " + items)
    removeFromCart(item)
    console.log("After removeFormCart: " + items)
  }

  const handleChange = (e, item) => {
    item.amount = parseInt(e.target.value)
    countTotal()
  }
  const handleDecrease = (item) => {
    if (item.amount === 1) return
    item.amount -= 1
    countTotal()
  }
  const handleIncrease = (item) => {
    item.amount += 1
    countTotal()
  }
  const countTotal = useCallback(() => {
    const total = items.reduce(
      (prev, next) => prev + parseFloat(next.price.substring(1)) * next.amount,
      0
    )
    setTotal(total)
  }, [items])

  useEffect(() => {
    countTotal()
  }, [items, countTotal])

  return <>slado</>
}
export default Saldo
