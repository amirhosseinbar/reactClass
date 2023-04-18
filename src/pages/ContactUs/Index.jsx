import React from 'react'
import FixHeader from '../../components/common/FixHeader'
import style from './style.module.css'

export default function ContactUs() {
  return (
    <div className={style.text}>
      <FixHeader/>
      <div className={style.header}>Contact Us</div>
      <br/>
      This Page called Contact Us !
      <br/>
      You can put your contact information on this page or let the user leave a message for you

    </div>
  )
}
