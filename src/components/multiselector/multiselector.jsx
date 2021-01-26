import React, { useEffect } from 'react';
import classnames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import multiselectorStyles from './multiselector.module.scss';

const CHIP_COLOR = '#c2d8f2';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export default function Multiselector(props) {
  const handleChange = event => {
    props.changeHandler(event.target.value);
  };

  const handleDelete = deletedChip => {
    props.changeHandler(props.selectedVal.filter(item => item[props.labelKey] !== deletedChip[props.labelKey]));
  }

  const menuProps = {
    getContentAnchorEl: null,
    transformOrigin: { vertical: 'top', horizontal: 'left'},
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  useEffect(() => {
    menuProps.anchorEl = () => {
      return document.getElementsByClassName(classnames(multiselectorStyles.chipsContainer, props.id)).item(0);
    }
  });

  return (
    <div className={multiselectorStyles.root} id={props.id}>
      <FormControl className={`multiselector-dropdown-btn ${multiselectorStyles.formControl}`} variant="outlined" >
        <Select
          displayEmpty
          multiple
          value={props.selectedVal}
          onChange={handleChange}
          inputProps={{
            name: (props.id || props.placeholder),
            id: 'select-multiple-placeholder-' + (props.id || props.placeholder)
          }}
          renderValue={() => <h2 className={multiselectorStyles.placeholderDefault}>{props.placeholder}</h2>}
          MenuProps={menuProps}
          autoWidth={true}
        >
          <MenuItem disabled value="">
            <h2 className={multiselectorStyles.placeholderDefault}>{props.placeholder}</h2>
          </MenuItem>
          {props.optionList.map(optionEntry => (
            <MenuItem key={optionEntry[props.labelKey]} value={optionEntry}>
              {optionEntry[props.labelKey]}
            </MenuItem>
          ))}
        </Select>
        <div className={classnames(multiselectorStyles.chipsContainer, props.id)}>
          <div className={multiselectorStyles.chips}>
            {props.selectedVal.map(value => (
              <Chip key={value[props.labelKey]}
                    label={value[props.labelKey]}
                    className={multiselectorStyles.chip}
                    onDelete={() => {handleDelete(value);}}
                    deleteIcon={<ClearIcon />}/>
            ))}
          </div>
        </div>
      </FormControl>
    </div>
  );
}
