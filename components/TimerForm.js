import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

// import another components
import TimerButton from './TimerButton';

export default class TimerForm extends React.Component {
  constructor(props){
    super(props);

    const { id, title, project } = props;

    this.state = {
        title: id ? title : '',
        project: id ? project : '',
    };
  }

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    project: PropTypes.string,
    onFormSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
    };
    
    static defaultProps = {
    id: null,
    title: '',
    project: '',
    };

  handleTitleChange = title => {
    this.setState({ title });
  }

  handleProjectChange = project => {
    this.setState({ project });
  }

  handleSubmit = () => {
    const { onFormSubmit, id } = this.props;
    const { title, project } = this.state;

    onFormSubmit({
      id,
      title,
      project,
    });
  };

  render(){
    const { id, onFormClose } = this.props;
    const { title, project } = this.state;
    const submitText = id ? 'Update' : 'Create';

    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}> 
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        value={title}
                        onChangeText={this.handleTitleChange}
                        // defaultValue={this.state.title} //initialize the field with current value
                    />
                </View>
            </View>
    
            <View style={styles.attributeContainer}> 
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}> 
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid="transparent"
                        value={project}
                        onChangeText={this.handleProjectChange}
                        // defaultValue={project} //initialize the field with current value
                    />
                </View>
            </View>
    
            <View style={styles.buttonGroup}>
                <TimerButton 
                    small 
                    color="#21BA45" 
                    title={submitText} 
                    onPress={this.handleSubmit}
                />
                <TimerButton 
                    small 
                    color="#DB2828" 
                    title="Cancel" 
                    onPress={onFormClose}    
                />
            </View>
        </View>
      )
  }

  
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});