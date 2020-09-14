import * as React from 'react';
import styles from './StdudWebPart.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Link } from 'react-router-dom';
import { Item } from '@pnp/sp/items';


interface IProps {
  description: string;
  context: WebPartContext;
}

interface IState {
  bookings: any[]
}

const Placement = props => (
  <tr>
    <td>{ props.booking.Title }</td>
    <td>{ props.booking.Description }</td>
    <td>{ props.booking.smthIsDamaged }</td>
    <td>{ props.booking.Houses }</td>
    <td>{ props.booking.tenant }</td>
    <td>
      <Link to={ "" + props.booking.Id }> edit </Link> | <a href="#" onClick={ () => {
      props.deletePlacement(props.booking.Id)}}> delete </a>
    </td>
  </tr>
);

export default class StdudWebPart extends React.Component<IProps, IState> {

  state: {
    bookings: null
  }

  async componentDidMount() {
    sp.setup({
      spfxContext: this.props.context
    });

    try {
      const orders: any[] = await sp.web.lists.getByTitle('Bookings').items.get();
      console.log(orders);
    } catch (error) {
      console.error(error);
    }
  }

  deletePlacement = (id) => {}

  // bookingList() {
  //   // return this.state.bookings.map(Item => {
  //     return <Placement
  //         booking = { Item }
  //         deletePlacement = { this.deletePlacement }
  //         // key = { Item.Id } 
  //         />
  //   // })
  // }

  render() {
    return (
        <div>
          <div>
            <h3>Your accommodations</h3>
              <button>
                <a>
                  Add
                </a>
              </button>
          </div>
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>description</th>
              <th>isDamaged</th>
              <th>booking rate</th>
              <th>house</th>
              <th>tenant</th>
            </tr>
            </thead>
            <tbody>
            {/* { this.bookingList() } */}
            </tbody>
          </table>
        </div>
    );
  }
}