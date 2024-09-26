import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import React from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccount() {
  const [isChecked, setChecked] = useState(false);

  const navigation = useNavigation();
  const Login = () => {
    navigation.navigate("login");
  };
  return (
    <View className=" bh linear-gradient(to right, #cc0099, #ff9933, #ff3399)">
      <View className=" w-auto h-auto items-center justify-center mt-16">
        <Text className="text-[25px]">Ingresar Datos</Text>
        <Text className="text-[15px]">Por favor completar información</Text>
      </View>
      <View className=" flex flex-col items-center justify-center mt-6 ">
        <Input
          placeholder="Nombres"
          name="username"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Apellidos"
          name="username"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View className=" w-full flex flex-row ml-14">
          <View className=" w-32 ">
            <Input
              placeholder="DNI"
              name="username"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View className="w-52  ">
            <Input
              placeholder="Numero de documento"
              name="username"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>
        <Input
          placeholder="Correo"
          name="username"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Contraseña"
          name="username"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View className="flex flex-row pl-8 mt-2 ">
        <Checkbox
          className="mr-1"
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text className="text-[11px] mt-1">Acepto</Text>
        <Text className="text-[#7209CA] underline text-[11px] mt-1">
          {" "}
          terminos, condiciones y politica de privacidad
        </Text>
      </View>
      <View className="items-center mt-11">
        <View className="h-12 mb-36 w-64 bg-[#7209CA] rounded-2xl ">
          <Button title="REGISTRAR" />
          <TouchableOpacity className="text-purple-500 ml-2 " onPress={Login}>
            <View className="flex flex-row mt-1">
              <Text className="mt-2 text-[13px]">¿Tienes una cuenta?</Text>

              <Text className="text-[#7209CA] underline  mt-2 pl-2 text-[13px]">
                INICIAR SESIÓN
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
