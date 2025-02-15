// Omit
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Omit -  унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;
