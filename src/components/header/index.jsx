//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from '../../assets/star-wars.svg'
// import { ReactComponent as IconSearchSVG } from '../../assets/icon-search.svg'
import { ReactComponent as FacebookLogoSVG } from '../../assets/facebook.svg'
import { ReactComponent as InstagramLogoSVG } from '../../assets/instagram.svg'
import { ReactComponent as TwitterLogoSVG } from '../../assets/twitter.svg'
import { ReactComponent as YoutubeLogoSVG } from '../../assets/youtube.svg'

import { withStyles } from '@mui/styles'

import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#9e9e9e',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#9e9e9e',
            },
            '&:hover fieldset': {
                borderColor: '#9e9e9e',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        '& label': {
            color: '#9e9e9e',
        },
    },
})(TextField)

//массив данных ссылок
const swLinks = [
    {
        url: 'https://www.facebook.com/StarWars',
        name: 'facebook_logo',
        component: <FacebookLogoSVG />,
    },
    {
        url: 'https://www.instagram.com/starwars/',
        name: 'instagram_logo',
        component: <InstagramLogoSVG />,
    },
    {
        url: 'https://twitter.com/starwars',
        name: 'twitter_logo',
        component: <TwitterLogoSVG />,
    },
    {
        url: 'https://www.youtube.com/user/starwars',
        name: 'youtube_logo',
        component: <YoutubeLogoSVG />,
    },
]

export const Header = ({ fan }) => {
    return (
        <header>
            <div className="links-layout">
                {swLinks.map((link) => (
                    <a
                        key={link.name}
                        className="link"
                        href={link.url}
                        target="_blank"
                        alt={link.name}
                        rel="noreferrer"
                    >
                        {link.component}
                    </a>
                ))}
            </div>
            <StarWarsLogoSVG />
            <div className="search-layout">
                <div className="search-bar">
                    <CustomTextField
                        id="outlined-basic"
                        label="Star Wars Search"
                        variant="outlined"
                        sx={{ input: { color: 'white' } }}
                    />
                    <IconButton
                        type="submit"
                        aria-label="search"
                        className="search-icon"
                    >
                        <SearchIcon style={{ fill: 'white' }} />
                    </IconButton>
                </div>
                <div style={{ color: 'white', paddingTop: '1rem' }}>
                    I am fan of: {fan}
                </div>
            </div>
        </header>
    )
}
