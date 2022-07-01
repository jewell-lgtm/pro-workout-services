import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const DifficultyForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.difficulty?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.difficulty?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="sortOrder"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sort order
        </Label>

        <NumberField
          name="sortOrder"
          defaultValue={props.difficulty?.sortOrder}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sortOrder" className="rw-field-error" />

        <Label
          name="multiplier"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Multiplier
        </Label>

        <TextField
          name="multiplier"
          defaultValue={props.difficulty?.multiplier}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="multiplier" className="rw-field-error" />

        <Label
          name="targetReps"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target reps
        </Label>

        <NumberField
          name="targetReps"
          defaultValue={props.difficulty?.targetReps}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="targetReps" className="rw-field-error" />

        <Label
          name="targetSets"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target sets
        </Label>

        <NumberField
          name="targetSets"
          defaultValue={props.difficulty?.targetSets}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="targetSets" className="rw-field-error" />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="imageUrl"
          defaultValue={props.difficulty?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageUrl" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.difficulty?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="exerciseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Exercise id
        </Label>

        <NumberField
          name="exerciseId"
          defaultValue={props.difficulty?.exerciseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="exerciseId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DifficultyForm
