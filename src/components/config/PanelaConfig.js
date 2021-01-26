import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const PanelaConfig = ({ panela }) => {
  const handleChange = (e) => {
    alert(e.target.name)
  }
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography>
            {panela.nome}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={panela.habilitada}
                onChange={handleChange}
                name={panela.nome}
                color="primary"
              />
            }
            label="Habilitada"
          />

        </CardContent>
      </Card>

    </div>
  );
};

export default PanelaConfig;
