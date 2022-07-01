import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ExerciseForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.exercise?.id)
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
          defaultValue={props.exercise?.name}
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
          defaultValue={props.exercise?.sortOrder}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sortOrder" className="rw-field-error" />

        <Label
          name="exercisePlanId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Exercise plan id
        </Label>

        <NumberField
          name="exercisePlanId"
          defaultValue={props.exercise?.exercisePlanId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="exercisePlanId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ExerciseForm
