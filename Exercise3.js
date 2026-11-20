import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const datasource = [
    {data:[
            {name: 'Psyduck', card:'54'},
            {name: 'Poliwag', card:'60'},
            {name: 'Vaporeon', card:'134'},
        ],
        title:"Water",
        icon:"tint",
        bgColor:'skyblue',
    },

    {data:[
            {name: 'Mew', card:'151'},
            {name: 'Slowpoke', card:'79'},
            {name: 'Clefairy', card:'35'},
        ],
        title:"Psychic",
        icon:"eye",
        bgColor:'plum',
    },

    {data:[
            {name: 'Nidoran', card:'29'},
            {name: 'Koffing', card:'109'},
            {name: 'Zubat', card:'41'},
        ],
        title:"Dark",
        icon:"moon",
        bgColor:'lightgray',
    },
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}
                          onPress={() => Alert.alert(item.name + " selected")}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image
                source={{uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card + '-2x.png'}}
                style={styles.imageStyle}
            />
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <Button title="Add Pokemon"
                        onPress={() => Alert.alert("Add Pokemon pressed")} />
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
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
    },
    topBar: {
        backgroundColor: 'white',
        padding: 15,
    },
    opacityStyle: {
        backgroundColor: 'lavender',
        borderWidth: 1,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 180,
        height: 250,
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 15,
        padding: 3,
        borderWidth: 1,
    },
    headerText: {
        fontSize: 24,
        marginLeft: 10,
    },
});
