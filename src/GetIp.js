// import express from "express";


export function GETIP(setIp) {
    let ip;
  fetch("https://api.ipify.org/?format=json")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      
     
      setIp(ipAddress);
    })
    .catch((error) => {
      
    });
   
}
