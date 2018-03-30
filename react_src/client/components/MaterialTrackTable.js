// import React...
import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';

// ... and HotTable
import HotTable from 'react-handsontable';

export default class MaterialTrackTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        handsontableData : [
            { id:  1, projectnr:  1703, projectname: 'V47', ordernr: '', secordernr: 'M18-0122', typeofwork: 'anyagrendelés', workdescription: 'Sika tömítőanyag', responsible: 'NA', plannr: '', structurename: '', orderer: 'SZZ', orderdate: '2/14/2018', confirmeddate: '', deliverydate: '', handoverdate: '', deliverynr: '', price: '', comment: '' },
            { id:  2, projectnr:  1714, projectname: 'C5', ordernr: '', secordernr: 'M18-0120', typeofwork: 'anyagrendelés', workdescription: 'szerelési és gyártási segédanyag', responsible: 'NA', plannr: 'AR-02; 03', structurename: '', oderer: 'IL', orderdate: '2/14/2018', confirmeddate: '2/14/2018', deliverydate: '8.hét', handoverdate: '', deliverynr: '', price: '760 000Ft', comment: ''}
        ],
        columns: [
            {
                data: 'id',
                type: 'text'
            },
            {
                data: 'projectnr',
                type: 'text'
            },
            {
                data: 'projectname',
                type: 'text'
            },
            {
                data: 'ordernr',
                type: 'text'
            },
            {
                data: 'secordernr',
                type: 'text'
            },
            {
                data: 'typeofwork',
                type: 'text'
            },
            {
                data: 'workdescription',
                type: 'text'
            },
            {
                data: 'responsible',
                type: 'text'
            },
            {
                data: 'plannr',
                type: 'text'
            },
            {
                data: 'structurename',
                type: 'text'
            },
            {
                data: 'orderer',
                type: 'text'
            },
            {
                data: 'orderdate',
                type: 'text',
                dateFormat: 'YYYY/DD/MM'
            },
            {
                data: 'confirmeddate',
                type: 'text',
                dateFormat: 'YYYY/DD/MM'
            },
            {
                data: 'deliverydate',
                type: 'text'
            },
            {
                data: 'handoverdate',
                type: 'text'
            },
            {
                data: 'deliverynr',
                type: 'text'
            },
            {
                data: 'price',
                type: 'text'
            },
            {
                data: 'comment',
                type: 'text'
            }
        ],
        colHeaders: [
            'Sorszám',
            'Projekt szám',
            'Projekt megnevezése',
            'Megrendelésszám +PDF',
            'Másodlagos megrendelésszám',
            'Munka neme',
            'Munka leírása',
            'Munka felelőse',
            'Terv szám',
            'Szerkezet megnevezése',
            'Megrendelő',
            'Megrendelés dátum',
            'Visszaigazolás dátuma/gyártás készrejelentés dátuma',
            'Kiszállítás dátuma',
            'Átadás-Átvétel dátuma',
            'Szállításhoz mellékelt szállítólevél száma + PDF',
            'Megrendelés ára Ft',
            'Megjegyzés'
        ]
    };
  };

  updateData = () => {
    var newhandsontableData = this.state.handsontableData;
    newhandsontableData[0]['projectnr']=newhandsontableData[0]['projectnr']+1;
      this.setState({
        handsontableData: newhandsontableData
      });
  }

  render() {
    return (
      <div id="example-component">
        <HotTable root="hot" 
            data={this.state.handsontableData}
            columns={this.state.columns} 
            colHeaders={this.state.colHeaders}
            rowHeaders={true}
            dropdownMenu={true} 
            sortIndicator={true}
            manualColumnResize={true}/>
        <FlatButton
        label="Update"
        primary={true}
        onClick={this.updateData}
      />
      </div>
    );
  }
}