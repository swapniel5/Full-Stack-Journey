# Full-Stack-Journey

---

type "!" (exclamation mark) and press enter in vs code.

First set HTML to the language
Then type:

html:5

And hit Tab

---

Started being full stack developer journey from March 1st, 2021

Browser add remaining important tag by itself. like, head and body tag.

<!DOCTYPE html> : tell browser which version of html we are accessing , which is HTML5

<meta charset = "utf-8">    :  used for  extra charset for html.
utf-8 charecter encoding.

Headeing tags:

<h1><h2><h3><h4><h5><h6>

<section> tag:
it defines sections in a document such as chapters, headers, footers, or any other sections of the document.

It usually represents a generic section of a document, i.e. a thematic grouping of content typically with heading.

div is not sematic where section is semantic.
Sections loke about us, contact us

Article tag:

article tag is tag whoch make sense by itself.
article is for unit of contents

\***\*\*\*\***CSS**\*\***
Relationship Selectors

1.  Descendent selectors
    select element that are contained within other element:
    ex: <section class="articles">
    <h1> Latest posts</h1>
    <article>
    <h1> Today's Rants</h1>
    <p>sdbkjdndsbdsnv
    jsnvknvvkjfv
    vjfnvkjdfnvfnvjjvfv jn jdnvs
    nn
    </p>
    </article>
    <article>
    <h1> Yesterdays's Posts</h1>
    <p>sdbkjdndsbdsnv
    jsnvknvvkjfv
    vjfnvkjdfnvfnvjjvfv jn jdnvs
    nn
    </p>
    </article>
    </section>

            so now if ew add css as
            section h1 {
                color:red;
            }

            red color will add to all h1 element under section tag. red will add to its immidiate descendant and great grand child also.

2.  Child Selectors
    used to select an immediate child of an elemnt.

<style>
    section > h1 {
            color:red;
        }
        </style>

red color will add to only h1 element under section tag

3.  sibling selectors
used to select an element places right after another element.
<p>sdbkjdndsbdsnv
                jsnvknvvkjfv
                vjfnvkjdfnvfnvjjvfv jn jdnvs
                nn
            </p>
            <a href="">more</a>
    <style>
            article p + a
                {
                    color:violet;
                }
                </style>
                <!-- (+)plus sign creates a sibling relationship between two elements that are around it.
                that means the elements on the left coms before the elements on the right but at
                the same level in the hierarchy.
                -->


Pseudo clases:
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user's pointer hovers over it.

/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
} 
1. first child -
    :first-child CSS psuedo-class repsresents any element that is the first child element of its parent.



speicificity rule:                                  (Cls,Attr,Psuedo)
CSS Rule                        inline,     ID,     CAP,    Ele
/----------------------------------------------------------------
                                0,          0,      0,      0
 article p + a {
    color: yellow;              0,          0,      0,      3
      }
 
 article p + a:hover {
    color: orange;              0,          0,      1,      3

article a {
        color: green;           0,          0,      0,      2
      }
                                     