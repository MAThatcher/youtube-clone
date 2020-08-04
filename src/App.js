import React from "react"
import { Grid } from '@material-ui/core'
import { SearchBar, VideoDetail, VideoList } from './components'
import youtube from './api/youtube'

class App extends React.Component {
    handleSubmit= async(searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyD4MDun2BkU1y25Kl7hqi98_Ivl8M_CAjw",
                q:searchTerm
            }
        })
        console.log(response)
    }
    render(){
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        
                        <Grid item sx={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>

                        <Grid item sx={8}>
                            <VideoDetail/>
                        </Grid>

                        <Grid item sx={4}>
                            <VideoList/>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App