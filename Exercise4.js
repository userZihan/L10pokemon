import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const datasource = [
    {data:[
            {name: 'Strawberry Shortcake', image:'https://i.pinimg.com/1200x/33/a8/16/33a816f6145564d1fe435c21c7293d7d.jpg'},
            {name: 'NewYork Cheesecake', image:'https://i.pinimg.com/736x/53/ff/e2/53ffe2ce6d416ba5dd9492580c4e8251.jpg'},
            {name: 'Red Velvet', image:'https://i.pinimg.com/736x/1e/5f/43/1e5f4354b2d14cfdd152bc0d3c3fe5c5.jpg'},
        ],
        title:"Cakes",
        icon:"birthday-cake",
        bgColor:'pink',
    },

    {data:[
            {name: 'Mint Choco', image:'https://i.pinimg.com/736x/1a/21/dd/1a21ddf2a57fa3c9aacf1864f5ea08b4.jpg'},
            {name: 'Cookie and Cream', image:'https://i.pinimg.com/736x/06/53/cc/0653cc8199079aaac74a2bdcc2f6c112.jpg'},
            {name: 'Mango', image:'https://i.pinimg.com/736x/57/2a/b3/572ab306d22622b61cc58204a66c7f9f.jpg'},
        ],
        title:"Ice Cream",
        icon:"ice-cream",
        bgColor:'lightblue',
    },

    {data:[
            {name: 'Choco Chip Cookie', image:'https://i.pinimg.com/736x/d4/88/dd/d488ddc29445757e81fb1eb877e3f381.jpg'},
            {name: 'Butter Cookie', image:'https://i.pinimg.com/1200x/87/7c/93/877c93664c7d76f240af959b3e90372a.jpg'},
            {name: 'Macarons', image:'https://i.pinimg.com/736x/d0/f1/64/d0f164dde98bf49d426bb0f7d53af71e.jpg'},
        ],
        title:"Cookie",
        icon:"cookie",
        bgColor:'wheat',
    },
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}
                          onPress={() => Alert.alert(item.name + " selected")}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image
                source={{uri: item.image}}
                style={styles.imageStyle}
            />
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <Button title="Add Dessert"
                        color="hotpink"
                        onPress={() => Alert.alert("Add dessert pressed")} />
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, icon, bgColor}}) => (
                    <View style={[styles.headerStyle, {backgroundColor: bgColor}]}>
                        <FontAwesome5 name={icon} size={24} color="black" />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 20,
    },
    topBar: {
        backgroundColor: 'white',
        padding: 15,

    },
    opacityStyle: {
        backgroundColor: 'lavenderblush',
        borderWidth: 1,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    textStyle: {
        width: 120,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageStyle: {
        width: 150,
        height: 200,
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        padding: 5,
        borderWidth: 1,

    },
    headerText: {
        fontSize: 24,
        marginLeft: 10,
    },
});
