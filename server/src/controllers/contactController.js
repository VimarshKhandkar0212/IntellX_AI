import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, companyName, projectTitle, projectDetail } = req.body;

    if(!name || !email || !phone){
        return res.status(400).json({
            sucess: False,
            message: "This Field is required",
        });
    }
    
    const contact = await Contact.create({
      name,
      email,
      phone,
      companyName,
      projectTitle,
      projectDetail,
    });

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};