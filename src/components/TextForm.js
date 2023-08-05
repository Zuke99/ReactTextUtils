import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <form>
  
  <div class="form-group">

    <textarea class="form-control" id="myBox" rows="10"></textarea>
  </div>
</form>
    </div>
  )
}
