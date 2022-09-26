import React, { useEffect, useState } from "react"

export const Notification = ({ type, message, setMessage, duration = 5000 }) => {
  const styles = {
    common: {
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: 5,
      backgroundColor: "#bbb",
      padding: 9,
      margin: "20px 0",
    },

    success: {
      borderColor: "green",
      color: "green",
    },

    error: {
      borderColor: "red",
      color: "red",
    },
  }

  return message === null || message.trim() === "" ? null : (
    <div style={{ ...styles["common"], ...styles[type] }}>{message}</div>
  )
}
