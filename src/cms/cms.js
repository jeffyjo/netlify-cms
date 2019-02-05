import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import TestPagePreview from './preview-templates/TestPagePreview';
import ArticlePagePreview from './preview-templates/ArticlePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('test', TestPagePreview)
CMS.registerPreviewTemplate('article', ArticlePagePreview)
