/**
 * @author Kushal Paudyal
 * Written For Sanjaal Corps
 * https://www.acryptochan.com
 * @since March 2023
 * 
 * Use it at your own risk. Author provides no liablity of any sort.
 */
import React from 'react'
import Typography from '@mui/material/Typography';

function ProjectSocials(projectMeta) {
    return (
                <Typography variant="body2" color="white">
                    <h4>PROJECT SOCIALS</h4>
                    {projectMeta.socials.map((item, index) => {
                        return (
                            <span key={index}><a href={item.link} target='_blank' rel='noreferrer'>{item.name}</a>&nbsp;{' '}</span>
                        );
                    })}
                </Typography>
    )
}

export default ProjectSocials