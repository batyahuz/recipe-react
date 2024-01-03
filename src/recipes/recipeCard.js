import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowTitle from '../general-fields/arrow-title';
import { useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Popover } from '@mui/material';
import { PurpleColor } from '../general-fields/colors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const RecipeCard = ({ recipe }) => {
  const { userId } = useSelector(state => ({
    userId: state.user.id
  }));

  const [ingridients, setIngridients] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClickShowIngridients = () => {
    setIngridients(!ingridients);
  };

  const handleClickShowInstructions = () => {
    setInstructions(!instructions);
  };

  const handleMoreVertionClick = (event) => {
    console.log("set more");
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Demo>
          <List >
            <ListItem key="0">
              <ListItemAvatar>
                <Avatar>
                  <SignalCellularAltIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`רמת קושי ${recipe.Difficulty}`}
              />
            </ListItem>
          </List>
        </Demo>
        <Demo>
          <List>
            <ListItem key="1">
              <ListItemAvatar>
                <Avatar>
                  <AccessTimeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`זמן הכנה ${recipe.Duration} דקות`}
              />
            </ListItem>
          </List>
        </Demo>
      </Popover>
      <Card sx={[{ maxWidth: 345 }, { border: `1px solid ${PurpleColor}` }, { margin: 'auto' }, { marginTop: '4px' }]}>
        <CardHeader
          avatar={
            <ArrowTitle
              title={recipe.Name}
              container={<Avatar sx={{ bgcolor: PurpleColor }} aria-label="recipe">
                {recipe.Name ? recipe.Name[0] : ""}
              </Avatar>
              }
            />
          }
          action={
            <ArrowTitle
              title="פרטים נוספים"
              container={
                <IconButton aria-label="settings" onClick={handleMoreVertionClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
          }
          title={recipe.Name}
          subheader={`⏳ זמן הכנה ${recipe.Duration} דקות`}
        />
        <CardMedia
          component="img"
          height="194"
          image={recipe.Img}
          alt={`תמונה של ${recipe.Name}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {recipe.Description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>

          <Link to="/singleRecipe">
            <ArrowTitle title="לצפיה במתכון המלא"
              container={
                <IconButton aria-label="see full recipe">
                  <FileOpenIcon />
                </IconButton>
              }
            />
          </Link>
          {
            // recipe.UserId == userId &&
            <Link to="/editRecipe" >
              <ArrowTitle title="ערוך את המתכון שלך"
                container={<IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>}
              />
            </Link>
          }
          <ExpandMore
            expand={instructions}
            onClick={handleClickShowInstructions}
            aria-expanded={instructions}
            aria-label="show more"
          >
            <ArrowTitle title="הוראות הכנה" container={<ExpandMoreIcon />} />
          </ExpandMore>
          <ExpandMore
            expand={ingridients}
            onClick={handleClickShowIngridients}
            aria-expanded={ingridients}
            aria-label="show more"
          >
            <ArrowTitle title="החומרים הדרושים" container={<ExpandMoreIcon />} />
          </ExpandMore>
        </CardActions>
        <Collapse in={ingridients} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph style={{ textDecoration: 'underline' }}>החומרים הדרושים</Typography>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>תיאור</TableCell>
                  <TableCell align="right">סוג</TableCell>
                  <TableCell align="right">כמות</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipe.Ingrident && recipe.Ingrident.map(ing => {
                  return <>
                    <TableRow
                      key={`${ing.Name}${ing.Type}${ing.Count}`}
                      style={{ textAlign: 'start' }}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {ing.Name}
                      </TableCell>
                      <TableCell align="right">{ing.Type}</TableCell>
                      <TableCell align="right">{ing.Count}</TableCell>
                    </TableRow>
                  </>
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Collapse>
        <Collapse in={instructions} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph style={{ textDecoration: 'underline' }}>הוראות הכנה</Typography>
            {recipe.Instructions && recipe.Instructions.map(ins => {
              return <Typography paragraph>{ins}</Typography>
            })}
          </CardContent>
        </Collapse >
      </Card >
    </>
  );
}

export default RecipeCard;