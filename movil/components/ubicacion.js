import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

const url = "http://192.168.100.116:3000/createGeapp";

export default class Localitation extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  getLocalitation() {
    navigator.geolocation.getCurrentPosition(posiscion => {
      var fecha = new Date();
      let latitud = posiscion.coords.latitude;
      let longitud = posiscion.coords.longitude;
      let data = {
        user_name: "Jose Molina",
        // ubicacion: `${latitud.toString()}, ${longitud.toString()}`,
        latitud,
        longitud,
        fecha: fecha
      };
      // return alert(JSON.stringify(data));

      const header = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };

      return fetch(url, header)
        .then(response => response.json())
        .then(responseJson => {
          alert("Geapp created succesfully");
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Ubicación"
          style={styles.boton}
          onPress={this.getLocalitation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  boton: {
    backgroundColor: "#367698",
    color: "white"
  }
});
