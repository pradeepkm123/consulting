import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './Dashboard.css';

function Heading({ children }) {
  return <h2 className="heading">{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="paragraph">{children}</p>;
}

function AddIndustries({ isOpen, toggleDrawer, onIndustrySubmit, industry }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageUrl: '',
    iconUrl: '',
    date: '',
    contentSets: [{ heading: '', paragraph: '' }],
  });

  useEffect(() => {
    if (industry) {
      setFormData({
        title: industry.title || '',
        subtitle: industry.subtitle || '',
        description: industry.description || '',
        imageUrl: industry.imageUrl || '',
        iconUrl: industry.iconUrl || '',
        date: industry.date || '',
        contentSets: industry.contentSets || [{ heading: '', paragraph: '' }],
      });
    } else {
      setFormData({
        title: '',
        subtitle: '',
        description: '',
        imageUrl: '',
        iconUrl: '',
        date: '',
        contentSets: [{ heading: '', paragraph: '' }],
      });
    }
  }, [industry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContentSetChange = (index, e) => {
    const { name, value } = e.target;
    const newContentSets = [...formData.contentSets];
    newContentSets[index][name] = value;
    setFormData({
      ...formData,
      contentSets: newContentSets,
    });
  };

  const addContentSet = () => {
    setFormData({
      ...formData,
      contentSets: [...formData.contentSets, { heading: '', paragraph: '' }],
    });
  };

  const removeContentSet = (index) => {
    const newContentSets = [...formData.contentSets];
    newContentSets.splice(index, 1);
    setFormData({
      ...formData,
      contentSets: newContentSets,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = industry ? `https://consulting-4rbe.onrender.com/api/industries/${industry._id}` : 'https://consulting-4rbe.onrender.com/api/industries';
      const method = industry ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(`Industry ${industry ? 'updated' : 'added'} successfully!`);
        onIndustrySubmit();
        toggleDrawer();
      } else {
        toast.error(`Failed to ${industry ? 'update' : 'add'} industry`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(`An error occurred while ${industry ? 'updating' : 'adding'} the industry`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        <Heading>{industry ? 'Edit Industry' : 'Add Industry'}</Heading>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="file" name="imageUrl" onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
          </div>
          {formData.contentSets.map((contentSet, index) => (
            <div key={index} className="content-set">
              <div className="form-group">
                <label>Heading Text</label>
                <input
                  type="text"
                  name="heading"
                  value={contentSet.heading}
                  onChange={(e) => handleContentSetChange(index, e)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Paragraph</label>
                <textarea
                  name="paragraph"
                  value={contentSet.paragraph}
                  onChange={(e) => handleContentSetChange(index, e)}
                  className="form-control"
                />
              </div>
              <button type="button" onClick={() => removeContentSet(index)} className="btn btn-danger">
                Remove Set
              </button>
            </div>
          ))}
          <button type="button" onClick={addContentSet} className="btn btn-secondary mt-2">
            Add Content Set
          </button>
          <div className="form-actions mt-3">
            <button type="button" className="btn-cancel btn btn-danger" onClick={toggleDrawer}>
              Cancel
            </button>
            <button type="submit" className="btn-submit btn btn-primary mt-2">
              {industry ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddIndustries;
