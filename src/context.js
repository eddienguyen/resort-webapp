import React, { Component } from 'react';
/// get local data:
// import items from 'assets/data'; // get item from CDN
import Client from './contentful';

const RoomContext = React.createContext();

// TODO: add history to context
class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            isLoading: true,
            type: "all",
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            size: 0,
            minSize: 0,
            maxSize: 0,
            capacity: 1,
            pets: false,
            breakfast: false,
            minDescChar: 0,
            history: {}
        };
        // this.formatData = this.formatData.bind(this);
    }

    /// call external data
    getData = async function () {
        try {
            let response = await Client.getEntries({
                content_type: "resortRoom",
                // order: "sys.createdAt"
                order: 'fields.price'
            });

            console.log('response from Contentful:', response);
            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            let maxPrice = Math.max(...rooms.map(room => room.price));
            let maxSize = Math.max(...rooms.map(room => room.size));
            let minDescChar = Math.min(...rooms.map(room => room.description.length));

            this.setState({
                rooms: rooms,
                sortedRooms: rooms,
                featuredRooms: featuredRooms,
                isLoading: false,
                price: maxPrice,
                maxPrice,
                maxSize,
                minDescChar
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData();
    }

    // after get the data items
    formatData(data) {
        let tempItems = data.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(img => img.fields.file.url);
            let room = {
                ...item.fields,
                images: images,
                id: id
            };
            return room;
        });
        return tempItems;
    }

    // TODO: check if Array.protptype.find() works after babel in IE
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room || null;
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        this.setState({
            [name]: value
        }, this.filterRooms);
    }

    initHistory = () => {
        
    }

    handleHistoryChange = (passedHistory) => {
        console.group('handleHistoryChange');
        console.log('passedHistory', passedHistory);
        console.groupEnd();
        this.setState({
            history: passedHistory
        });
    }

    filterRooms() {
        console.log('filtering');

        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;

        let tempRooms = [...rooms];

        /// because select box value returns string
        capacity = parseInt(capacity);
        price = parseInt(price);
        minSize = parseInt(minSize);
        maxSize = parseInt(maxSize);

        // filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }

        // filter by capacity
        if (capacity !== 1) {
            // filter all rooms that its capacity is bigger than new capacity value (not equals)
            tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        }

        // filter by price
        // filter all rooms that its price is smaller than new price value 
        tempRooms = tempRooms.filter((room) => room.price <= price);

        // filter by size
        tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize);

        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter((room) => room.breakfast === true);
        }
        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }

        this.setState({
            sortedRooms: tempRooms
        });
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                handleChange: this.handleChange,
                handleHistoryChange: this.handleHistoryChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

/// Higher-Order-Components && ContextAPI ? fuckin' trippy!
function withRoomConsumer(Component) {
    return function (props) {
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {
    RoomContext,
    RoomProvider,
    RoomConsumer,
    withRoomConsumer
};