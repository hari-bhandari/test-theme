import React from "react";
import {
  SceneView
} from "@react-navigation/core";

class SidebarView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      };
    }
    
    
    
    render() {
      const { descriptors, navigation } = this.props;
      const activeKey = navigation.state.routes[navigation.state.index].key;
      const descriptor = descriptors[activeKey];
     //console.log(navigation);
      return (
          <SceneView
            component={descriptor.getComponent()}
            navigation={navigation}
          />
      );
    }
}



export default SidebarView;