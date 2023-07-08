import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const getDepartmentLabel = (value) => {
  if(value === 'digital'){
    return "Digital & Health";
  }else if(value === 'data_ai'){
    return "Data & AI";
  }else if(value === 'hr'){
    return "Human resources";
  }else if(value === 'finance'){
    return "Finance"
  }
}

export default function App() {
  const [showRegistration, setShowRegistration] = React.useState(true);
  const [name, setName] = React.useState('');
  const [department, setDepartment] = React.useState('digital');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {showRegistration && <View>
        <Text style={styles.titleText}>Genzeon</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          placeholder='Enter your name'
        />
        <Text style={{...styles.labelText,marginBottom:5}}>Choose your department:</Text>
        <Picker
          mode='dropdown'
          style={styles.picker}
          selectedValue={department}
          onValueChange={(itemValue, itemIndex) =>
            setDepartment(itemValue)
          }>  
          <Picker.Item label="Digital Health" value="digital" />
          <Picker.Item label="Data & AI" value="data_ai" />
          <Picker.Item label="Human resources" value="hr" />
          <Picker.Item label="Finance" value="finance" />
        </Picker>
        <Button
          onPress={() => {
            setShowRegistration(false)
          }}
          title="Register"
          color="#0693e3"
        />
      </View>}
      {
        !showRegistration && <View>
          <Text style={styles.bodyText}>Welcome to Genzeon, {name}</Text>
          <Text style={{...styles.registeredText,marginTop:50}}>Department : {getDepartmentLabel(department)}</Text>
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0693e3',
    textAlign: "center",
  },
  bodyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0693e3',
    textAlign: "center",
  },
  labelText: {
    fontSize: 14,
    color: '#000000',
  },
  registeredText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b4e53',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 250,
    marginTop: 50,
    marginBottom: 25,
    borderWidth: 1,
    padding: 10,
  },
  picker:{
    height:40,
    width:250,
    marginBottom: 50,
  }
});
