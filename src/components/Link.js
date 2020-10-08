import React from 'react'


const Link = ({ active, children, onClick }) => (
    <button
      className="waves-effect blue btn-small"
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)



export default Link
