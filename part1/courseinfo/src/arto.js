import React, { Component } from "react";

 function Arto_test({ name, age, education }) {
  const arto = {
    name: "Yemi",
    age: 55,
    education: "PHD",
    //assigning method to an object
    greet: function () {
      console.log("hello, my name is" + this.name);
    },

    doAddition: function (a, b) {
      console.log(a + b);
    },
  };

  arto.doAddition(16, 4);
   const referenceToAddition = arto.doAddition;
   referenceToAddition(10, 15);

  arto.growOlder = function () {
    this.age = age + 1;
  };
  console.log(arto.age);
  console.log(education);
  console.log(name);
  arto.growOlder();
  console.log(arto.age);
  return <></>;
}

export default Arto_test;
