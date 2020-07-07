var StudentAll = React.createClass({

    getInitialState: function () {
        return { name: '', frag: '', calicata: '', contact: '', id: '', Buttontxt: 'Save', data1: [] };
    },
    handleChange: function (e) {
        this.setState({ [e.target.name]: e.target.value });
    },

    componentDidMount() {

        $.ajax({
            url: "api/getdata",
            type: "GET",
            dataType: 'json',
            ContentType: 'application/json',
            success: function (data) {
                this.setState({ data1: data });

            }.bind(this),
            error: function (jqXHR) {
                console.log(jqXHR);

            }.bind(this)
        });
    },

    DeleteData(id) {
        var studentDelete = {
            'id': id
        };
        $.ajax({
            url: "/api/Removedata/",
            dataType: 'json',
            type: 'POST',
            data: studentDelete,
            success: function (data) {
                alert(data.data);
                this.componentDidMount();

            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);


            }.bind(this),
        });
    },



    EditData(item) {
        this.setState({ name: item.name, frag: item.frag, contact: item.contact, calicata: item.calicata, id: item._id, Buttontxt: 'Update' });
    },

    handleClick: function () {

        var Url = "";
        if (this.state.Buttontxt == "Save") {
            Url = "/api/savedata";
        }
        else {
            Url = "/api/Updatedata";
        }
        var studentdata = {
            'name': this.state.name,
            'frag': this.state.frag,
            'calicata': this.state.calicata,
            'contact': this.state.contact,
            'id': this.state.id,

        }
        $.ajax({
            url: Url,
            dataType: 'json',
            type: 'POST',
            data: studentdata,
            success: function (data) {
                alert(data.data);
                this.setState(this.getInitialState());
                this.componentDidMount();

            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            }.bind(this)
        });
    },

    render: function () {
        return (
            <div className="container" style={{ marginTop: '50px' }}>
                <p className="text-center" style={{ fontSize: '12px' }}><b> <u>Hoja de registro - Terreno  - Calicatas - V0.1.00.</u> </b></p>
                <form>
                    <div className="col-sm-12 col-md-12" style={{ marginLeft: '400px' }}>
                        <table className="table-bordered">
                            <tbody>
                                <tr>
                                    <td><b>Proyecto</b></td>
                                    <td>
                                        <input className="form-control" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                                        <input type="hidden" value={this.state.id} name="id" />
                                    </td>
                                </tr>

                                <tr>
                                    <td><b>Fragmentos Sup.:</b></td>
                                    <td>

                                        <select name="frag" value={this.state.frag} onChange={this.handleChange}>
                                            <option value="Sin">Sin</option>
                                            <option value="Lig">Lig</option>
                                            <option value="Mod">Mod</option>
                                            <option value="Abund">Abund.</option>
                                            <option value="Muy abund">Muy Abund.</option>
                                        </select>


                                    </td>
                                </tr>




                                <tr>
                                    <td><b>Calicata</b></td>
                                    <td>
                                        <input type="text" className="form-control" value={this.state.calicata} name="calicata" onChange={this.handleChange} />
                                    </td>
                                </tr>


                                <tr>
                                    <td><b>Contact</b></td>
                                    <td>
                                        <input type="text" className="form-control" value={this.state.contact} name="contact" onChange={this.handleChange} />
                                    </td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td>
                                        <input className="btn btn-primary" type="button" value={this.state.Buttontxt} onClick={this.handleClick} />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                    <div className="col-sm-12 col-md-12 " style={{ marginTop: '50px', marginLeft: '300px' }} >

                        <table className="table-bordered"><tbody>
                            <tr><th><b>S.No</b></th><th><b>Proyecto</b></th><th><b>frag</b></th><th><b>Calicata</b></th><th><b>Contacto</b></th><th><b>Edit</b></th><th><b>Delete</b></th></tr>
                            {this.state.data1.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.frag}</td>
                                    <td>{item.calicata}</td>
                                    <td>{item.contact}</td>
                                    <td>

                                        <button type="button" className="btn btn-success" onClick={(e) => { this.EditData(item) }}>Edit</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-info" onClick={(e) => { this.DeleteData(item._id) }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                        </table>
                        <br />
                        Developed by <a href="http://aardvark-labs.us" target="_blank">Felipe</a> - Piece of Software Powered by React - Nodejs - Express - MongoDB Technologies. - <a href="https://github.com/felipealfonsog/CalicatasV0.1.00" target="_blank">Source Code</a> -.
       </div>
                </form>





            </div>
        );
    }
});

ReactDOM.render(<StudentAll />, document.getElementById('root')) 