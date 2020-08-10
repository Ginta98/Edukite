import React from 'react';
import {
    Text,
    ScrollView,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';
import { QR_SCAN } from '../../navigator/RouteName'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { size, texts } from '../../constant/CommonStyles';
import { scale, scaleModerate } from '../../constant/Scale';
import DropDownPicker from 'react-native-dropdown-picker';
import Loading from '../../components/Loading'
import { WHITE, GRAY_FONTCOLOR, PRIMARY_COLOR, BLACK, PINK_FONTCOLOR, PURPLE_FONTCOLOR } from '../../constant/Colors';
class GetOutEarly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            selected: 0,
            dataStudents: [
                {
                    id: 0,
                    name: 'Lê Bảo Ngọc1',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 1,
                    name: 'Lê Bảo Ngọc2',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 2,
                    name: 'Lê Bảo Ngọc3',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 3,
                    name: 'Lê Bảo Ngọc4',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 4,
                    name: 'Lê Bảo Ngọc5',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 5,
                    name: 'Lê Bảo Ngọc6',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 6,
                    name: 'Lê Bảo Ngọc7',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 7,
                    name: 'Lê Bảo Ngọc8',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 8,
                    name: 'Lê Bảo Ngọc9',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 9,
                    name: 'Lê Bảo Ngọc10',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 10,
                    name: 'Lê Bảo Ngọc11',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },
                {
                    id: 11,
                    name: 'Lê Bảo Ngọc12',
                    image: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png',
                    extraData: '',
                    isSelected: false
                },

            ],
            filterDataStudents: 'all'
        }

    }
    _renderStudent(name, image, extraData, id) {
        const dataStudents = this.state.dataStudents;
        // Get index of student in dataStudents by id
        let index;
        for (let x in dataStudents) {
            if (dataStudents[x].id === id) {
                index = x
            }
        }
        //
        return (
            <TouchableOpacity
                onPress={() => {
                    dataStudents[index].isSelected = !dataStudents[index].isSelected;
                    this.setState({
                        dataStudents
                    })
                }}
                style={{ margin: scale(5), width: '30%', justifyContent: 'center', alignItems: 'center', padding: scale(5), borderWidth: scale(1), backgroundColor: this.state.dataStudents[index].isSelected ? PRIMARY_COLOR : WHITE }}>
                <View style={{ height: scale(70), width: scale(70) }}>
                    <Image
                        style={{ width: '100%', height: '100%', borderRadius: scale(999) }}
                        source={{
                            uri: image,
                        }}>
                    </Image>
                </View>
                <Text style={[texts.h5, { marginTop: scale(5), color: this.state.dataStudents[index].isSelected ? WHITE : GRAY_FONTCOLOR, textAlign: 'center' }]}>{name}</Text>
            </TouchableOpacity>
        )
    }
    _onPressComplete() {
        let dataStudentUnchecked = []
        this.state.dataStudents.map((item, index) => {
            if (item.isSelected === false) {
                dataStudentUnchecked.push({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    extraData: item.extraData,
                    isSelected: item.isSelected
                })
            }
        })
        console.log(JSON.stringify(dataStudentUnchecked))
    }
    render() {
        let stop = [
            {
                address: '210 Trung Kính'
            },
            {
                address: '190 Hoàng Mai'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Láng'
            },
            {
                address: '210 Duy Tân'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
            {
                address: '210 Trường Chinh'
            },
        ]
        let dataStopDropDown = []
        stop.map((item, index) => {
            dataStopDropDown.push({
                label: item.address,
                value: item.address,
            })
        })
        if (dataStopDropDown) {
            let dataStudentFiltered = []
            if (this.state.filterDataStudents === 'all') {
                this.state.dataStudents.map((item, index) => {
                    dataStudentFiltered.push({
                        id: item.id,
                        name: item.name,
                        image: item.image,
                        extraData: item.extraData,
                        isSelected: item.isSelected
                    })
                })
            } else if (this.state.filterDataStudents === 'checked') {
                this.state.dataStudents.map((item, index) => {
                    if (item.isSelected) {
                        dataStudentFiltered.push({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            extraData: item.extraData,
                            isSelected: item.isSelected
                        })
                    }
                })
            } else if (this.state.filterDataStudents === 'unchecked') {
                this.state.dataStudents.map((item, index) => {
                    if (item.isSelected === false) {
                        dataStudentFiltered.push({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            extraData: item.extraData,
                            isSelected: item.isSelected
                        })
                    }
                })
            }
            return (
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <DropDownPicker
                            items={dataStopDropDown}
                            placeholder={'Điểm dừng'}
                            defaultValue={this.state.country}
                            containerStyle={{ height: scale(40), width: '90%', marginTop: scale(20) }}
                            style={{ backgroundColor: WHITE }}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            placeholderStyle={{
                                color: PRIMARY_COLOR
                            }}
                            onChangeItem={item => {
                                this.setState({
                                    country: item.value
                                })
                            }}
                            searchable={true}
                            searchablePlaceholder="Tìm kiếm"
                            searchablePlaceholderTextColor="gray"
                            seachableStyle={{}}
                            searchableError={() => <Text>Không có kết quả nào</Text>}
                            dropDownMaxHeight={scale(300)}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ alignItems: 'center', marginTop: scale(10) }}>
                        <View style={{ flexDirection: 'row', width: '90%', height: scale(100) }}>

                            <View style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'flex-start', marginLeft: scale(10) }}>
                                <View
                                    style={{ marginBottom: scale(10) }}

                                >
                                    <Text style={[texts.h4, { color: PURPLE_FONTCOLOR, fontWeight: 'bold', textAlign: 'left' }]}>Xuống sớm: 1/50</Text>
                                </View>

                                <View

                                >
                                    <Text

                                        style={[texts.h4, { color: BLACK, textAlign: 'left' }]}>Xe 6: 19K1 - 8195</Text>
                                </View>
                            </View>

                            <TouchableOpacity
                                style={{ width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => this.props.route.navigation.navigate(QR_SCAN)}
                            >
                                <Icon name={'qrcode'} size={scale(55)}></Icon>
                                <Text style={[texts.normal, { textAlign: 'center' }]}>Quét mã QR</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.studentListContainer}>
                            <View style={styles.searchContainer}>
                                <Icon name={'search'} size={scaleModerate(20)} color={PRIMARY_COLOR} style={{ flex: 1, marginLeft: scale(5) }} />
                                <TextInput
                                    placeholder={'Search'}
                                    style={styles.input} />
                            </View>
                            <DropDownPicker
                                items={
                                    [
                                        {
                                            label: 'Tất cả',
                                            value: 'all'
                                        },
                                        {
                                            label: 'Đã điểm danh',
                                            value: 'checked'
                                        },
                                        {
                                            label: 'Chưa điểm danh',
                                            value: 'unchecked'
                                        },

                                    ]
                                }
                                placeholder={'Lọc theo danh sách'}
                                defaultValue={this.state.filterDataStudents}
                                containerStyle={{ height: scale(35), width: '100%', marginBottom: scale(10) }}
                                style={{ backgroundColor: WHITE }}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                placeholderStyle={{
                                    color: BLACK
                                }}
                                onChangeItem={item => {
                                    this.setState({
                                        filterDataStudents: item.value
                                    })
                                }}
                                dropDownMaxHeight={scale(500)}
                            />
                            {dataStudentFiltered.length === 0 ? <View style={{ width: '100%', height: scale(100) }} /> : null}
                            <View style={{ width: '100%' }}>
                                <FlatList
                                    data={dataStudentFiltered}
                                    renderItem={({ item, index, separators }) => {
                                        return (
                                            this._renderStudent(item.name, item.image, item.extraData, item.id)
                                        )
                                    }}
                                    numColumns={3}
                                ></FlatList>
                            </View>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <Icon name={'caret-left'} size={scale(40)} style={{ color: PRIMARY_COLOR }}></Icon>
                                </TouchableOpacity>
                                <Text style={[texts.h5], { marginLeft: scale(10), marginRight: scale(10) }}>Trang 1/3</Text>
                                <TouchableOpacity>
                                    <Icon name={'caret-right'} size={scale(40)} style={{ color: PRIMARY_COLOR }}></Icon>
                                </TouchableOpacity>
                            </View> */}
                            <TouchableOpacity
                                onPress={() => this._onPressComplete()}
                                style={{ backgroundColor: PRIMARY_COLOR, padding: scale(5), marginTop: scale(10) }}
                            >
                                <Text style={[texts.h5], { fontWeight: 'bold', color: WHITE }}>Hoàn thành</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: scale(100) }}></View>

                    </ScrollView>
                </View>
            )
        } else {
            return (

                <Loading />

            )
        }
    }
}
const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: scale(35),
        backgroundColor: WHITE,
        borderWidth: scale(0.5),
        borderRadius: scale(15),
        marginBottom: scale(10),
    },
    input: {
        justifyContent: 'center',
        fontSize: scaleModerate(14),
        textAlign: 'left',
        height: scale(33),
        fontSize: scale(14),
        paddingVertical: scale(-5),
        backgroundColor: WHITE,
        borderRadius: scale(15),
        flex: 8.5
    },
    studentListContainer: {
        width: '90%',
        padding: scale(20),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 50,
        backgroundColor: WHITE,
        elevation: 16,
        marginTop: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default GetOutEarly;