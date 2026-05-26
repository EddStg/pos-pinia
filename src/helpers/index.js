export const formatCurrecy = amount => Number(amount).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
})
