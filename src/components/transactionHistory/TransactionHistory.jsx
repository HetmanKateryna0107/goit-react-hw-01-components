export const TransactionHistory=({items})=>{
    return( 
        <table class="transaction-history">
             {items.map((item) => (<thead key={item.id}>
    <tr>
      <th>{item.type}</th>
      <th>{item.amount}</th>
      <th>{item.currency}</th>
    </tr>
  </thead>
  )
 )
 }
   </table>    )}