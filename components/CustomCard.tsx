import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Icon, Card, Button } from 'react-native-elements'

const CustomCard = (Props: { title: String | null | undefined, action?: Function, text?: String }) => {
    if (Props.title === undefined || Props.title === null){
        return (
            <Card>
                <Card.Title>Add new device</Card.Title>
                <Card.Divider />
                <Icon name='computer' color='#ffffff' />
                <Button
                    icon={<Icon name='computer' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 15, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Add'
                    onPress={()=>{alert("test")}} />
            </Card>
        )
    }
    return (
        <Card>
        <Card.Title>{Props.title}</Card.Title>
        <Card.Divider />
        {/* <Card.Image source={require('../images/default.png')}> */}
        <Icon name='computer' />
          <Text style={{ marginBottom: 10, color: "#000" }}>
            {Props.text}
          </Text>
      
        {/* </Card.Image> */}
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 15, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
      </Card>
    )
}

export default CustomCard;

const styles = StyleSheet.create({})
